---
title: Alpha Release
author: deif
date: "2023-09-30"
banner: "alpha.png"
---

Today marks the first public release of Petalex - a [DSProxy](https://github.com/dapphub/ds-proxy) vault wrapped inside a transferable NFT, allowing users to execute transactions in batches simply and safely with pre-simulated transactions before committing to the chain.


The alpha release dapp includes a complete integration for [Gravita Protocol](https://gravitaprotocol.com), with [Uniswap V3](https://app.uniswap.org) flash loan and swap capabilities, and token transfer utility functions. This means that a user can create leveraged Gravita vessels in a single transaction.

The dapp itself currently runs on a mainnet fork, courtesy of [Tenderly](https://dashboard.tenderly.co) (what a great tool) for users to test, audit the contracts, report bugs, and contribute themselves to the development of the protocol. Once I am happy that the application is safe for actual mainnet release will it be available on mainnet itself and ownership will be transferred to a 1 day minimum [Timelocked](https://blog.openzeppelin.com/protect-your-users-with-smart-contract-timelocks) multisig [Safe](https://safe.global/). 

## Safety

Safety on blockchains should always be the first priority. On mainnet release the following actions will be taken to give users reassurance regarding the safety of their funds:

* Timelocked contract for all admin operations and Petalex NFT upgrading - this allows users to exit in a timely manner and safely if they feel changes are made to the protocol that they don't like
* Timelock owned by a multisig safe, expanding number of required signers and authorised signers over time - this ensures that Petalex can be maintained going forward in a community oriented manner
* Fully open source - **everything** is available on the Github, fully documented - allowing faster iteration and more integrations, as well as having more eyes to enhance security
* 50% of revenue diverted into a vulnerability bounty fund - bug hunters can be compensated for any vulnerabilities disclosed that could have exploited user funds

## Revenue

Speaking of revenue, how is Petalex funded? Quite simply - donations.

* No investors
* 100% community owned
* No mint fees
* No management fees

The only way Petalex will be funded is through optional donations sent to the multisig safe. Users and defi projects that want to ensure their users are safe are recommended to contribute financially to fund bug fixes, additional features, bug bounty payouts, and upkeep costs. Funds will be paid out to contributors monthly at the discretion of the multisig signers.


## Community First

Petalex is a first for true decentralised open source software. Upkeep costs are minimal - hosting on [Github](https://github.com/Petalex-Protocol), [IPFS](https://www.ipfs.tech/), and the blockchain. There are no privately owned servers, no investors to fund, it's just us. Let's grow a community that puts the safety of users first, and can adapt to new projects quickly. We're at a point in time where the tools are available to very quickly build on top of projects. The stack that powers Petalex are a combination of the best currently available tools and leveraged to their full capability to allow for such a project to exist. Utilising technologies like AI image generation, [Foundry](https://getfoundry.sh/), [Fleek](https://fleek.co/), [ENS](https://app.ens.domains/), and Tenderly means there's no underlying privately owned infrastructure, or externally hired contributors. If necessary this can all be run immutably forever, or alternatively become as large as thousands of contributors, being paid regularly through regular investments.

The choice is ours to decide where we go. Let's start growing!