# ReadMeGen

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  - [Description](#Description)
  - [Tools/Technologies](#Tools/Technologies)
  - [Code](#Code)
  - [License](#License)
  - [Repo_Link](#Repo_Link)
  - [Example](#Example)
  - [Author_Info](#Author_Info)

  ## Description
  This application will generate a quality readMe file.

  ## Tools/Technologies
- JavaScript
- Node
- npm Inquirer

## Code
 Write question responses to readMe
```JS
inquirer
    .prompt(questions).then((data) => {
        console.log(data)
        const readme = generateMarkdown(data)
        fs.writeFile('sampleread.md', readme, (err) => {
            err ?
                console.log('FAILED TO WRITE FILE') :
                console.log('THE FILE HAS BEEN WRITTEN')
        })
    });

```
## Repo_Link
- [ReadMe Gen Repo](https://github.com/aparnell0130/readmeGen)

## Example
<a href="https://drive.google.com/file/d/1Arm1zvdOX_CNLU85Hm_EmGpjcvNUIABG/view">
    <img src="assets\demo.PNG">
</a>

## License
- MIT License

Copyright (c) [2020] [Aaron Parnell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

## Author_Info
  Github: [aparnell0130](https://github.com/aparnell0130)  
  LinkedIn: [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)  
  Email: aparnell0130@gmail.com

[Back to top](#ReadMeGen)
