# Description
longestSubsequence Function that takes one string input of any number of integers separated by single whitespace. The function then outputs the longest increasing subsequence (increased by any number) present in that sequence.

## Local Development Environment
npm: v7.10.0
node: v14.16.1

## Test Environment
In Project root folder, please run following commands as you need.

If Docker is installed in local environment, please check if it is running.
```
docker info
```
If Docker is running, please run following command to test all defined test cases.
```
docker-compose run test
```

If Docker is not installed and would like to use npm in local environment, please run following command to test all defined test cases.
```sh
npm install
npm test
```

Once, it's finished, it will show results with test coverage.

## Continuous Integration
[GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) is used in CI and workflow will be triggered when new push comes in master branch.