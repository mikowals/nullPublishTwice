# Demo of null publish and onAllRoutes problem for meteorhacks:fast-render

Steps to reproduce:

1. `clone https://github.com/mikowals/nullPublishTwice.git`
2. `cd nullPublishTwice`
3. `meteor`
4. In a browser navigate to `127.0.0.1:3000` which connects to the app triggering fast-render

# Expected output is:

> fast-render path: /  
> named publish called  
> null publish called

Printed once.

# Actual output

Expected output printed dozens of times.  Once for each path not in the browser cache when loading a meteor page.
