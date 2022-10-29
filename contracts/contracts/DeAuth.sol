// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract DeAuth {
    event AddNewPassword(
        address indexed from,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );
    event Disconnect(
        address indexed from,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );

    event MoveConnectedSocialMediaToNewWallet(
        address fromOld,
        address indexed fromNew,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );
    event changePassword(
        address indexed from,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );

    //Social medias that have passwords from DeAuth
    mapping(address => mapping(string => string[])) ConnectedSocialMedias;

    mapping(address => mapping(string => uint256[])) currentSaltValues;

    constructor() {}

    //Removing the value in a list(string) that exist the value
    function remove(uint256 index, string[] storage list) private {
        for (uint256 i = index; i < list.length - 1; i++) {
            list[i] = list[i + 1];
        }
        list.pop();
    }

    //Removing the value in a list(uint256) that exist the value
    function removeForUint(uint256 index, uint256[] storage list) private {
        for (uint256 i = index; i < list.length - 1; i++) {
            list[i] = list[i + 1];
        }
        list.pop();
    }

    //Checking is the list exist the value
    function checkAValueExistInList(string memory value, string[] memory list)
        public
        pure
        returns (bool ret)
    {
        for (uint256 i = 0; i < list.length; i++) {
            if (keccak256(bytes(list[i])) == keccak256(bytes(value))) {
                ret = true;
                return ret;
            }
        }
        ret = false;
        return ret;
    }

    //Returns index of the value in the list
    function indexOfValue(string memory value, string[] memory list)
        public
        pure
        returns (uint256 index)
    {
        for (index = 0; index < list.length; index++) {
            if (keccak256(bytes(list[index])) == keccak256(bytes(value))) {
                return index;
            }
        }
    }

    //Returns connected social medias as list
    function getConnectedSocialMedias(string memory walletApp)
        external
        view
        returns (string[] memory)
    {
        return ConnectedSocialMedias[msg.sender][walletApp];
    }

    //Returns connected social medias' salts as list
    function getSalts(string memory walletApp)
        external
        view
        returns (uint256[] memory)
    {
        return currentSaltValues[msg.sender][walletApp];
    }
}
