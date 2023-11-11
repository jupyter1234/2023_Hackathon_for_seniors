/** @format */

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "", // <- id
  password: "", // <- password
  host: "", // <- host
  port: process.env.PORT, // <- port
  localRoot: __dirname + "/dist", // <- 빌드 결과가 담긴 폴더명 넣기
  remoteRoot: "/", // <- 배포될 서버 경로
  include: ["*", "**/*"], // this would upload everything except dot files
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ["node_modules/**", "node_modules/**/.*", ".git/**"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false, // false = ftp, true = sftp
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
