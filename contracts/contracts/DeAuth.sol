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
}
