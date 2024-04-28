import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    platform: 'node',
    outdir: 'dist',
})
