// allow for always displaying the latest version of resume (same file name with diff commit id)

const commits = [
    '683f65045ea3c81811621e509ae5c705bdc421a4'
]

const resume = {
    url: `https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website@${commits[commits.length - 1]}/portfolio/src/data/resume/Zi_Qing_Chew_Resume.pdf`,
    fileName: 'Zi_Qing_Chew_Resume.pdf'
}

export default resume