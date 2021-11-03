// const mdLinks = require('../');
const transformPath = require('../libs/route.js')
const extractionMd = require('../libs/mdExtractionFiles.js')
const readContent= require('../libs/readFilesMd.js')
const urlPaths= require('../libs/getUrl.js');
const mdLinks=require('../libs/mdLinks.js')




let pathMock = './mocks';
let pathAbsolute = 'C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\test\\mocks';
let pathFileTxt = 'C:\\GitHub\\BootCamp\\CDMX011-md-links-commonJS\\test\\mocks\\file.txt';
let pathFileMd = 'C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\test\\mocks\\exampleMock.md';
let mdArray = ["C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\test\\mocks\\exampleMock.md"];
let dirNivel1 = 'C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\nivel1';



describe('mdLinksAbsolute Path', () => {
  it('should return a string with an absolute path from a relative one', () => {
    expect(typeof transformPath.absolutePath(pathMock)).toBe('string')
  });
  it('should return C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\mocks', () => {
    expect(transformPath.absolutePath(pathMock)).toBe('C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\mocks')
  });

  it('Should return the same path if this is absolute ', () => {
    expect(transformPath.absolutePath(pathAbsolute)).toEqual('C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\test\\mocks')
  });
});

describe('Extraction path files md', () => {
  it('Should return an empty array', () => {
    expect(extractionMd.tofilterMd(pathFileTxt)).toEqual([]);
  });

  it('with this C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\test\\mocks\\exampleMock.md path Should return an array', () => {
    expect(extractionMd.tofilterMd(pathFileMd)).toEqual(mdArray);
  });
  it('with this C:\\GitHub\\BootCamp\\CDMX011-md-links-commonjs\\CDMX011-md-links-commonJS\\nivel1 path Should return an array with 23 elements', () => {
    expect(extractionMd.tofilterMd(dirNivel1).length).toEqual(6);
  });
})


// describe('Read file', () => {
//   it('Should return an String', () => {
//     console.log(readContent.readFiles(pathFileMd))
//     expect(typeof readContent.readFiles(pathFileMd)).toEqual('String')
//   });

//   it('Should return a message about a wrong ext', () => {
//     expect(readContent.readFiles(pathFileTxt)).toEqual("\n\n The path is wrong or doesn\'t contain md files");
//   }); 
// });

// describe('Get url', () => {
//   it('Should get all url form examplemonks.md', () => {
//         expect(urlPaths.findUrl(pathFileMd)).toEqual("\n\n The path is wrong or doesn\'t contain md files");
//       }); 
// })


// describe('httpRequest', () => {
//     it('Should get all url form examplemonks.md', () => {
//           expect(urlPaths.findUrl(pathFileMd)).toEqual("\n\n The path is wrong or doesn\'t contain md files");
//         }); 
//   })


//   describe('httpRequest', () => {
//     it('Should get all url form examplemonks.md', () => {
//           expect(urlPaths.findUrl(pathFileMd)).toEqual("\n\n The path is wrong or doesn\'t contain md files");
//         }); 
//   })


  describe('MdLinks', () => {
    it('Should return an error ', () => {
          expect(mdLinks.mdLinksAsync(pathFileMd, {comando1:'--stats' ,comando2:''})).toEqual();
        }); 
  })

