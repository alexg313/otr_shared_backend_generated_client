# Import
In your app.js, inject the otrBackendService module

```js
angular.module("otr-console", [
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ngRetina',
    ...
    'otrBackendService'
]);
```

## Instantiation

- Inject OtrService into your controller/bizLogic
- Create an OtrService variable in the scope of the controller/bizLogic
- You can inject the domain via constructor injection.

```js
...
var otrService = new OtrService({domain: ENV.apiEndpoint})
...
```

## Usage

- The methods generated in the OtrService component are the java methodName + "Using" + httpMethod
- E.g. getCaseUsingGET, confirmBookingUsingPOST, and etc...

```js
let responseSuccess = await otrService.getCaseUsingGET({caseId: caseId});
```

## Error Handling

- Sample Code

```typescript
try {
    await otrService.getCaseUsingGET({caseId: caseId})
} catch(error) {
    const uiErrorMsg = error.body.error.uiErrorMsg;
}
```

## How to upgrade the generated AngularJS client
1. 
   Generate the JSON models and endpoints from devo
   ``` npm run generate:devo```
   1. OR generate the JSON models and endpoints from local server
   ``` npm run generate:local```
2. Optional: Sanity check the differences in otrBackendService.js
3. Commit the changes and push to github
4. Update the version number in package.json
5. Execute ```npm publish```
   1. Make sure you are authenticated with npm under the @otr-app organization
      1. ```npm login --scope=@otr-app```
      2. Run step 5 again
6. Done.