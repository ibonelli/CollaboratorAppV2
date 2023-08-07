Mono repo with NestJS & React ([initial integration work](https://github.com/ibonelli/nest-react)).

With that basic project started adding React components and exporting services from NEST.

It features a [MUI React table](https://mui.com/material-ui/react-table/) which fetches data from a NESTjs service:
- Backend endpoint [localhost:3000/api/col](http://localhost:3000/api/col/) -- NESTjs server
- Frontend table [localhost:5173](http://localhost:5173/) -- Vite/React server

This has 3 important scripts:

```
npm run dev     # Runs local environment
npm run build   # Builds a single server (2 separate dist folders)
npm run start   # Runs built version of the Application
```

When running as production build both (NEST+Vite) run at [localhost:3000](http://localhost:3000).

Work so far:
- Added service `getCollaboratorList()` @ app.service.ts
- Added endpoint `col` which uses the service @ app.controller.ts
- Created new component `Table.tsx` which fetches the data from NEST.
- Added the new table component @ App.tsx
