pragma solidity ^0.8.0;

contract StudentAuth {
    struct Student {
        string name;
        string email;
        bytes32 passwordHash;
    }

    struct Certificate {
        string name;
        string rollNo;
        string branch;
        uint256 dateOfGraduation;
        string degree;
        string instituteHash;
        bytes32 serialNum;
        bytes32 qrCode;
    }

    event DisplayCertID(bytes32 qrCode, bytes32 serialNum);
    
    mapping (bytes32 => Student) private students;
    mapping (bytes32 => Certificate) private certificates;

    function register(string memory name, string memory email, string memory password) public {
        bytes32 passwordHash = keccak256(abi.encodePacked(password));
        students[passwordHash] = Student(name, email, passwordHash);
    }

    function getStudent() public view returns (string memory, string memory) {
        Student storage student = students[getPasswordHash()];
        return (student.name, student.email);
    }

    function authenticate(string memory password) public view returns (bool) {
        bytes32 passwordHash = keccak256(abi.encodePacked(password));
        Student storage student = students[passwordHash];
        return (student.passwordHash == passwordHash);
    }

    function getPasswordHash() public view returns (bytes32) {
        return keccak256(abi.encodePacked(msg.sender));
    }

    function addCertificate(string memory name, string memory rollNo, string memory branch, uint256 dateOfGraduation, string memory degree, string memory instituteHash) public {
        bytes32 serialNum = keccak256(abi.encodePacked(name, rollNo, branch, dateOfGraduation, degree, instituteHash));
        bytes32 qrCode = keccak256(abi.encodePacked(name, rollNo, branch, dateOfGraduation, degree, instituteHash, serialNum));
        certificates[qrCode] = Certificate(name, rollNo, branch, dateOfGraduation, degree, instituteHash, serialNum, qrCode);
        emit DisplayCertID(qrCode, serialNum);
    }

    function verifyCertificate(bytes32 qrCode, bytes32 serialNum) public view returns (bool) {
        Certificate storage certificate = certificates[qrCode];
        return (certificate.serialNum == serialNum);
    }
}
