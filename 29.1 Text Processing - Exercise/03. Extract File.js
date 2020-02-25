function extractFile(string) {
  let fullNameFile = string.substr(string.lastIndexOf('\\') + 1);
  let nameFile = fullNameFile.substr(0, fullNameFile.lastIndexOf('.'));
  let extencionFile = fullNameFile.substr(fullNameFile.lastIndexOf('.') + 1)

  console.log(`File name: ${nameFile}\nFile extension: ${extencionFile}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')