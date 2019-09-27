import * as fs from "fs"
import * as path from "path"

type ReadParser< T > = ( data: any ) => T;
type WriteParser< T > = ( value: T ) => any;

export class DataStreamer<T> {
	private static defaultPath = 'out/data.dat';

	constructor( filename?: string, readParser?: ReadParser<T>, writeParser?: WriteParser<T> ) {
		this._readParser = readParser || JSON.parse as ReadParser<T>;
		this._writeParser = writeParser || JSON.stringify as WriteParser<T>;

		this._filename = filename || DataStreamer.defaultPath;
	}

	writeData( data: T ) {
		let dir = path.dirname( this._filename );
		if ( !fs.existsSync( dir ) ) {
			fs.mkdirSync( dir );
		}
		fs.writeFileSync( this._filename, this._writeParser( data ));
	}

	readData(): T {
		try {
			return this._readParser( fs.readFileSync( this._filename ).toString() );
		}
		catch(e){
			console.error('initial data not found' );
			return null;
		}
	}

	private _readParser: ReadParser<T>;
	private _writeParser: WriteParser<T>;
	private _filename: string;
}
