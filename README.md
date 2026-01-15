# 📦 cmdbox

cmdbox is a simple CLI tool for storing, managing, and quickly running frequently used commands.

![Showcase gif](.github/showcase.gif)

_showcase_

### Installation

```bash
# Using npm
npm install -g cmdbox

# Using pnpm
pnpm add -g cmdbox
```

### API

```bash
Commands:
  cmdbox add            Add a new command to the store
  cmdbox list           List all stored commands
  cmdbox purge          Remove all stored commands
  cmdbox run [name]     Run a stored command
  cmdbox remove [name]  Remove a stored command

Options:
  -h, --help     Show help                                       [boolean]
  -v, --version  Show version number                             [boolean]
```

### Examples

#### Add a new command

```bash
$ cmdbox add
✔ Name? › sayhi
✔ Description? › prints "hello, world!"
✔ Command? › echo "hello, world!"
Command has been added
```

#### List all stored commands

```bash
cmdbox list
```

#### Run a stored command

```bash
cmdbox run my-command
```

#### Remove a stored command

```bash
cmdbox remove my-command
```

#### Remove all stored commands

```bash
cmdbox purge
```

## License

This project is licensed under the [MIT](LICENSE) License
