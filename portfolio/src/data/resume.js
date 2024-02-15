// allow for always displaying the latest version of resume (same file name with diff commit id)

const commits = [
    'caa0011e5d0ac5887c7ca3565f0ade9e799a9c4f',
    '957148a7335fa1fbc39653c61fefbfb6d6cfd674',
    '0ff3d72ceeba1f356e5c88871a784b3eb8b7965f',
    '4cd5da33487f03da5d6dfa56c04fd59ac83bd5c6',
    '8cb92c6b1a0967d51126e9781058fc25bea00ef2',
    'd6fbca8f9b701b829f676d839a253e266f00872c',
    '8bf864657b9a8476fdc020cb3e2f865852172a91',
    '512f0e96da0c064dd60c938a99013ac284e5e6ea',
    'f7349319f7f86d987b3b68c168be924cf050a9cd',
    '2d4d7f78e091b8051288a201e40f377ecda362a0',
    'b87c0db953ee08edff3b1874f564b39243893de8',
    'a50b5b79c2ca5569d998793d6a6527c015dd0b64',
]

const resume = {
    url: `https://cdn.jsdelivr.net/gh/chewzzz1014/portfolio-website@${commits[commits.length - 1]}/portfolio/src/data/resume/ZiQingChew_Resume.pdf`,
    fileName: 'ZiQingChew_Resume.pdf'
}

export default resume