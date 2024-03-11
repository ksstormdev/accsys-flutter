## Installing nestjs

Refer to [01-nx.md](01-nx.md) for the nx-specific commands.

Install `typescript` in `packages` folder and configure:

```bash
cd packages
npm install typescript
npx ts --init
```
Replace the generated `packages/tsconfig.json` with the following:

```json
{
 "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
 },
 "include": ["src/**/*.ts"],
 "exclude": ["node_modules", "**/*.spec.ts"]
}
```
Create `packages/tsconfig.base.json`

```json
{
 "extends": "./tsconfig.json",
 "compilerOptions": {
    "rootDir": "./",
    "outDir": "./dist/out-tsc",
    "declaration": false
 },
 "files": [],
 "include": [],
 "references": [
    { "path": "apps/api" },
    { "path": "apps/frontend" },
    { "path": "libs/shared" }
 ]
}
```
Quoting [01-nx.md](01-nx.md):
```bash
npx nx add @nrwl/nest
npx nx generate @nrwl/nest:application backend
```
Manually produce backend documentation JSON

```bash
nx show project backend-e2e --json > ../docs/02-backend-e2e_initial-state.json
nx show project backend --json > ../docs/02-backend_initial-state.json
```
