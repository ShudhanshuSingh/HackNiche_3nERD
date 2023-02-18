import Web3 from "web3";
// import StudentAuthArtifact from "./contracts/StudentAuth.json";
import ABI from './utils/ABI.json';

// check if the web3 provider is present

// use the injected web3 provider
const web3 = new Web3(window.ethereum);
const StudentAuth = new web3.eth.Contract(
    ABI,
    "0x305B8bd3bc03dB8a2d6f7010d8807B1CA891428E"
);
const blockchainAuthenticate = async (password) => {
    try {
        // request user permission to access their accounts
        await window.ethereum.enable();

        // get the contract artifact
        // const StudentAuth = new web3.eth.Contract(
        //     ABI,
        //     "0x61cA05a12fd6593836f7De4dbD9770828b92e2e7"
        // );

        // authenticate the current user
        const isAuthenticated = await StudentAuth.methods.authenticate(password).call({
            from: "0xCAa7CcC0891B646fCf00412db6DB3F83EE0cCdB4"
        });

        // get the current user's information
        // [name, email] = await StudentAuth.methods.getStudent().call({
        //     from: web3.eth.defaultAccount
        // });

    } catch (error) {
        console.error(error);
    }
}

const blockchainCurrentUser = async () => {
    try {
        // request user permission to access their accounts
        await window.ethereum.enable();

        // get the contract artifact
        // const StudentAuth = new web3.eth.Contract(
        //     ABI,
        //     "0x61cA05a12fd6593836f7De4dbD9770828b92e2e7"
        // );

        // get the current user's information
        
        // [name, email] = await StudentAuth.methods.getStudent().call({
        //     from: "0xCAa7CcC0891B646fCf00412db6DB3F83EE0cCdB4"
        // });

    } catch (error) {
        console.error(error);
    }
}


const blockchainCreateAcc = async () => {


    try {
        // request user permission to access their accounts
        await window.ethereum.enable();

        // get the contract artifact
        // const StudentAuth = new web3.eth.Contract(
        //     ABI,
        //     "0x61cA05a12fd6593836f7De4dbD9770828b92e2e7"
        // );

        // register a new student
        // const name = "Vivek Pandit";
        // const email = "vivek@tcet.in";
        // const password = "pass";
        const name = "Vishal Tiwari";
        const email = "vishal@thakur.com";
        const password = "vish12";

        await StudentAuth.methods.register(name, email, password).send({
            // from: web3.eth.defaultAccount
            from: "0xCAa7CcC0891B646fCf00412db6DB3F83EE0cCdB4"
            // from: "0x6C6747B3EA4810De4e83f9E9b90E52F47Cb5a31A"
        });

        // authenticate the current user
        // const isAuthenticated = await StudentAuth.methods.authenticate(password).call({
        //     from: web3.eth.defaultAccount
        // });

        // get the current user's information
        // [name, email] = await StudentAuth.methods.getStudent().call({
        //     from: web3.eth.defaultAccount
        // });

    } catch (error) {
        console.error(error);
    }
}

const addCertificate = async (name, rollNo, branch, dateOfGraduation, degree, instituteHash) => {
    try {
        await window.ethereum.enable();
        await StudentAuth.methods.addCertificate(name, rollNo, branch, dateOfGraduation, degree, instituteHash).send({
            from: instituteHash
        });

        const results = await StudentAuth.events.DisplayCertID(
            function (error, result) {
                if (!error){
                    console.log(result);
                }else console.log(error);
            }
        );
    } catch (error) {
        console.error(error);
    }
}

export {blockchainAuthenticate , blockchainCreateAcc , blockchainCurrentUser, addCertificate};


