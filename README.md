# homework

## Deployment

This has been deployed using Surge

## Website

[Aiden's Homework](www.aidenshomework.com)

### Using Surge

```
npm install --global surge
```

After that, just navigate to any directory and run 'surge'
Then it will prompt you to set up an account (which I did)

### Adding my own custom domain

1. Setup domain hosting to redirect to the surge instance by putting in '@ record' and 'www record' pointing to "na-west1.surge.sh"
2. Then run:

```
surge path/to/my-project aidenshomework.com
```

3. Save the custom domain by running:

```
echo aidenshomework.com > CNAME
```

4. Update .gitignore to ignore the CNAME file and confirm the /dist is in the .gitignore too

# To Deploy Now:

1. Go to root directory and open up Hyper terminal
2. First run:

```
npm run build
```

3. Then go to the /dist directory and open up a terminal and run

```
surge
```

Everything is already set up and saved.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
