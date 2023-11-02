Jamais faça o seu javascript no próprio documento do HTML, isto não é uma boa prática. </br>
Para utilizar um arquivo JS externo, basta colocar a tag `script` junto ao atributo `src` e o caminho do arquivo javascript.:

```html
<head>
    <title>Home </title>
</head>
<body>
    <h1>.. </h1>
    <p>.... </p>

    <script src="./index.js"> </script>
</body>
```

