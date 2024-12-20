# React Native FlatList Index Mismatch After Data Filtering

This repository demonstrates a subtle bug in React Native's FlatList component related to index values after data manipulation (filtering/sorting) and provides a solution. The problem occurs when the `keyExtractor` prop is not set correctly or the `index` prop is wrongly used after data modifications.

## Bug Description
When filtering or sorting data displayed in a `FlatList`, if the `keyExtractor` is improperly set, the `index` prop may not reflect the correct position of the items after the data update, resulting in incorrect display or unexpected behaviour.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run the app on an emulator or device.
4. Observe the index values displayed in the FlatList. Notice the mismatch after filtering.

## Solution
The solution involves using a unique identifier (such as a UUID) as the key for each item in the `keyExtractor` function.  This ensures that the component maintains correct tracking of items even after changes in the data source.

## Usage
This repo contains two files:
- `bug.js`: Demonstrates the buggy behavior.
- `bugSolution.js`: Shows the correct implementation using a unique key.