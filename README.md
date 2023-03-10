## textarea-autosizing

It implements a vertical auto-resizer for the <textarea> HTML element using React and it seems to be properly working on:

```
Safari: Version 16.3 (18614.4.6.1.6)
Firefox:  111.0 (64-bit)
Chrome: Version 110.0.5481.177 (Official Build) (x86_64)
Chromium: Version 113.0.5620.0 (Developer Build) (x86_64)
```

### how to?
```
git clone git@github.com:Grabber/textarea-autosizing.git
```

```
npm install
npm run build
npm run start
```

### parameterization / index.css
```
:root {
  --textarea-font-size: 12pt;
  --textarea-line-height: 1.2em;
  --textarea-max-number-of-lines: 5;
}
```

### screenshots
![Screenshot 2023-03-10 at 18 00 43](https://user-images.githubusercontent.com/15731/224427382-85f34fcf-ebc9-4264-83d9-bbca57f6c4bc.png)

![Screenshot 2023-03-10 at 18 01 03](https://user-images.githubusercontent.com/15731/224427450-8e985a8d-b6f0-462f-a985-23c49875ec25.png)

![Screenshot 2023-03-10 at 18 01 08](https://user-images.githubusercontent.com/15731/224427460-491d6dff-91e1-482f-a5e1-5437b36f2e72.png)

![Screenshot 2023-03-10 at 18 01 12](https://user-images.githubusercontent.com/15731/224427476-3df21834-73ef-4f97-946c-43508e1242bd.png)

![Screenshot 2023-03-10 at 18 01 18](https://user-images.githubusercontent.com/15731/224427489-38f4b500-0629-48aa-9d57-3c90d93382eb.png)

![Screenshot 2023-03-10 at 18 01 25](https://user-images.githubusercontent.com/15731/224427510-d470ed33-b9e2-416e-b602-f30af9d2a495.png)
