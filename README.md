# Personal Website
A website showcasing my interests, hobbies, organisations and more.

![Languages](https://skillicons.dev/icons?i=html,css,tailwind,js)

---

When copying **ANY** code from this repository, **provide credit to me, the author**. Please do not just copy everything and use it for yourself.

---

### NGINX configuration
> Replace `YOUR_DOMAIN` with your domain (e.g. william.net.au)

```
nano /etc/nginx/sites-available/YOUR_DOMAIN.conf
ln -s /etc/nginx/sites-available/YOUR_DOMAIN.conf /etc/nginx/sites-enabled/YOUR_DOMAIN.conf
```

Copy the config located in [nginx.conf](/nginx.conf) here and update the values accordingly.
