# Agent instructions

## Packages are deep modules

See [src/packages/README.md](./src/packages/README.md) before adding or
importing a package under `src/packages/`.

Import a package only through its entry points (its root files). Never reach
into a package's subfolders, and never re-export a whole subtree through a
barrel file.
