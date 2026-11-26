# Packages

Every package under `src/packages/` is a **deep module**: a lot of behaviour
behind a small interface.

```
src/packages/
  <name>/
    index.ts        ← entry point (public). Import this from outside.
    client.ts       ← another entry point. Packages may expose several.
    lib/            ← implementation: hidden from outside, free to import each other.
    tests/          ← co-located tests + fixtures (a subfolder, so private).
```

## The rules

1. **Entry-point boundary.** Code outside a package may import only that
   package's entry points — its root files. Anything in a subfolder is
   private, however deep it nests.
2. **Intra-package freedom.** A package's own files import each other freely.
3. **Tests through the entry points.** Files under `<pkg>/tests/` may import
   any package's entry points and their own `tests/` fixtures, but never a
   package's subfolder internals — not even their own. Integration tests
   across packages are fine; deep imports are not.
4. **No cycles.** No dependency cycles anywhere.

Depth decides public versus private, so adding a subfolder never needs a
config change. Adding an entry point is just adding a root file.

## Entry points, not a barrel

The public surface is *every root file* of the package, so a package can
expose several small entry points (`index.ts`, `client.ts`, `server.ts`)
instead of funnelling everything through one giant `index.ts`.

**Barrel files that re-export a whole subtree are discouraged.** A barrel
re-publishes internals you meant to hide, and the boundary rule then has
nothing left to protect. Expose several small entry points instead of
re-exporting a subtree through one index.

## Copy-me template

`src/packages/example/` is a starter template — copy it, or delete it when a
real package lands. `index.ts` delegates to `lib/impl.ts`; the test imports
only `../index`.

## Running the checks

```sh
npm run lint:boundaries   # dependency-cruiser enforces the four rules
npm run check             # typecheck + boundaries + tests
```

`lint:boundaries` is a hard error, not a warning. If it fails, the import
you wrote reaches past an entry point — move the code you need into the
package's root, or export what the caller needs from a root file.
