// allow for always displaying the latest version of resume (same file name with diff commit id)

const commits = [
    'caa0011e5d0ac5887c7ca3565f0ade9e799a9c4f',
    '957148a7335fa1fbc39653c61fefbfb6d6cfd674'
]

const resume = {
    url: `https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website@${commits[commits.length - 1]}/portfolio/src/data/resume/ZiQingChew_Resume.pdf`,
    fileName: 'ZiQingChew_Resume.pdf'
}

export default resume