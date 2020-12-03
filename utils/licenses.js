const licenses = [
    {
        licenseName: 'Apache license 2.0',
        licenseKey: 'apache-2.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        licenseName: 'Boost Software License 1.0',
        licenseKey: 'bsl-1.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    },
    {
        licenseName: 'BSD 2-clause "Simplified" license',
        licenseKey: 'bsd-2-clause',
        licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
        licenseName: 'BSD 3-clause "New" or "Revised" license',
        licenseKey: 'bsd-3-clause',
        licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        licenseName: 'Creative Commons Zero v1.0 Universal',
        licenseKey: 'cc0-1.0',
        licenseBadge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
    },
    {
        licenseName: 'Creative Commons Attribution 4.0',
        licenseKey: 'cc-by-4.0',
        licenseBadge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
    },
    {
        licenseName: 'Creative Commons Attribution Share Alike 4.0',
        licenseKey: 'cc-by-sa-4.0',
        licenseBadge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
    },
    {
        licenseName: 'Do What The F*ck You Want To Public License',
        licenseKey: 'wtfpl',
        licenseBadge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
    },
    {
        licenseName: 'Eclipse Public License 1.0',
        licenseKey: 'epl-1.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    },
    {
        licenseName: 'Eclipse Public License 2.0',
        licenseKey: 'epl-2.0',
        licenseBadge: '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
    },
    {
        licenseName: 'GNU Affero General Public License v3.0',
        licenseKey: 'agpl-3.0',
        licenseBadge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    },
    {
        licenseName: 'GNU General Public License v2.0',
        licenseKey: 'gpl-2.0',
        licenseBadge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    },
    {
        licenseName: 'GNU General Public License v3.0',
        licenseKey: 'gpl-3.0',
        licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        licenseName: 'GNU Lesser General Public License v2.1',
        licenseKey: 'lgpl-2.1',
        licenseBadge: '[![License: LGPL 2.1](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)'
    },
    {
        licenseName: 'GNU Lesser General Public License v3.0',
        licenseKey: 'lgpl-3.0',
        licenseBadge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    },
    {
        licenseName: 'ISC',
        licenseKey: 'isc',
        licenseBadge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    },
    {
        licenseName: 'MIT',
        licenseKey: 'mit',
        licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        licenseName: 'Mozilla Public License 2.0',
        licenseKey: 'mpl-2.0',
        licenseBadge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        licenseName: 'The Unlicense',
        licenseKey: 'unlicense',
        licenseBadge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    },
    {
        licenseName: 'zLib License',
        licenseKey: 'zlib',
        licenseBadge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    },
]
module.exports = licenses