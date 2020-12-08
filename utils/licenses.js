// array of license objects
const licenses = [
    {
        licenseName: 'Apache license 2.0',
        licenseKey: 'apache-2.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        licenseDesc: 'Copyright [yyyy] [name of copyright owner]  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. Click license for more detail'
    },
    {
        licenseName: 'Boost Software License 1.0',
        licenseKey: 'bsl-1.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        licenseDesc: 'Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following: Click license for more detail'
    },
    {
        licenseName: 'BSD 2-clause "Simplified" license',
        licenseKey: 'bsd-2-clause',
        licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        licenseDesc: 'Copyright <YEAR> <COPYRIGHT HOLDER>  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: Click license for more detail'
    },
    {
        licenseName: 'BSD 3-clause "New" or "Revised" license',
        licenseKey: 'bsd-3-clause',
        licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        licenseDesc: 'Copyright <YEAR> <COPYRIGHT HOLDER>  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:Click license for more detail'
    },
    {
        licenseName: 'Creative Commons Zero v1.0 Universal',
        licenseKey: 'cc0-1.0',
        licenseBadge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
        licenseDesc: 'The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. Click license or badge for more detail'
    },
    {
        licenseName: 'Creative Commons Attribution 4.0',
        licenseKey: 'cc-by-4.0',
        licenseBadge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
        licenseDesc: 'Share — copy and redistribute the material in any medium or format Adapt — remix, transform, and build upon the material for any purpose, even commercially. Click license or badge for more detail'
    },
    {
        licenseName: 'Creative Commons Attribution Share Alike 4.0',
        licenseKey: 'cc-by-sa-4.0',
        licenseBadge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
        licenseDesc: 'Share — copy and redistribute the material in any medium or format Adapt — remix, transform, and build upon the material for any purpose, even commercially. Click license or badge for more detail'
    },
    {
        licenseName: 'Do What The F*ck You Want To Public License',
        licenseKey: 'wtfpl',
        licenseBadge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        licenseDesc: 'DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. Click license or badge for more detail'
    },
    {
        licenseName: 'Eclipse Public License 1.0',
        licenseKey: 'epl-1.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        licenseDesc: 'THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENTS ACCEPTANCE OF THIS AGREEMENT. Click license for more detail'
    },
    {
        licenseName: 'Eclipse Public License 2.0',
        licenseKey: 'epl-2.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)',
        licenseDesc: 'THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENTS ACCEPTANCE OF THIS AGREEMENT. Click license for more detail'
    },
    {
        licenseName: 'GNU Affero General Public License v3.0',
        licenseKey: 'agpl-3.0',
        licenseBadge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        licenseDesc: 'The GNU Affero General Public License is a free, copyleft license for software and other kinds of works, specifically designed to ensure cooperation with the community in the case of network server software. Click license for more detail'
    },
    {
        licenseName: 'GNU General Public License v2.0',
        licenseKey: 'gpl-2.0',
        licenseBadge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
        licenseDesc: 'The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users. Click license for more detail'
    },
    {
        licenseName: 'GNU General Public License v3.0',
        licenseKey: 'gpl-3.0',
        licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        licenseDesc: 'The GNU General Public License is a free, copyleft license for software and other kinds of works. Click license for more detail'
    },
    {
        licenseName: 'GNU Lesser General Public License v2.1',
        licenseKey: 'lgpl-2.1',
        licenseBadge: '[![License: LGPL 2.1](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)',
        licenseDesc: 'The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public Licenses are intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users. Click license for more detail'
    },
    {
        licenseName: 'GNU Lesser General Public License v3.0',
        licenseKey: 'lgpl-3.0',
        licenseBadge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        licenseDesc: 'This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below. Click license for more detail'
    },
    {
        licenseName: 'ISC',
        licenseKey: 'isc',
        licenseBadge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        licenseDesc: 'Copyright <YEAR> <OWNER> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.Click license for more detail'
    },
    {
        licenseName: 'MIT',
        licenseKey: 'mit',
        licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        licenseDesc: 'Copyright <YEAR> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: Click license for more detail'
    },
    {
        licenseName: 'Mozilla Public License 2.0',
        licenseKey: 'mpl-2.0',
        licenseBadge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        licenseDesc: 'Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license: Click license for more detail'
    },
    {
        licenseName: 'The Unlicense',
        licenseKey: 'unlicense',
        licenseBadge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        licenseDesc: 'This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. Click license for more detail'
    },
    {
        licenseName: 'zLib License',
        licenseKey: 'zlib',
        licenseBadge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
        licenseDesc: 'Copyright (c) <year> <copyright holders> This software is provided "as-is", without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software. Click license for more detail'
    },
]
// export array of objects
module.exports = licenses