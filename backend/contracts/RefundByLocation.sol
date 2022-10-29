// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract RefundbyLocation {

    address ownerAddress;

    struct Employee {
        address payable employeeAddress;
        bool violated;
        uint256 contractStartDate;
        string  lat;
        string  latOffset;
        string  lon;
        string  lonOffset;
        string  acceptedRange;
    }



    modifier ownerOnly() {
        require(msg.sender ==ownerAddress);
        _;
    }

    

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event NewEmployee(string name, address employeeAddress);


    Employee[] public employees;

    uint256 public employeeCount;
    
    constructor() {

        ownerAddress = msg.sender;
        employeeCount = 0;
    }

    // create employees
    function createEmployee(
        address employeeAddress,
        string memory latitude,
        string memory latitudeOffset,
        string memory longitude,
        string memory longOffset,
        string memory acceptedRange
    ) public payable ownerOnly {

        // the contract starting date
        uint256 startDate = block.timestamp;
        bool violated =  false;

        employees.push(
            Employee(
                payable(employeeAddress),
                violated,
                startDate,
                latitude,
                latitudeOffset,
                longitude,
                longOffset,
                acceptedRange
            )
        );
        employeeCount++;
    }



    function getBalance(address balanceAddress) public view returns (uint256) {
        return balanceAddress.balance;
    }

    function getAllEmployees() public view returns (Employee[] memory) {
        return (employees);
    }
    
    function payEmployees()  public payable {
        if (employeeCount > 0 ) {

            for(uint i = 0; i <= employeeCount; i++){
                if (employees[i].violated == false){
                
                uint amount = (employees[i].contractStartDate - block.timestamp);
                (bool sent, bytes memory data) = employees[i].employeeAddress.call{value: msg.value}("");
                require(sent, "Failed to Pay Customer");

                }
        
            } 
        }
    }



    
    
    function passOwnership(
        address newOwnerAddress
    ) public ownerOnly {
        ownerAddress = newOwnerAddress;
    }
}


