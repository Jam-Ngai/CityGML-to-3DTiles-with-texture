import Converter from "citygml-to-3dtiles";
let converter = new Converter({
    srsProjections: {
      'urn:ogc:def:crs:EPSG::3879':'+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      'EPSG:32632':'+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs',
      'EPSG:3946':'+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      'urn:ogc:def:crs:EPSG::25833':'+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs' 
    }
  });
await converter.convertFiles('export.gml', 'result');