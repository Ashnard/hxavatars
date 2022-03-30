# 👾 hxAvatars

A front-end-only stream overlay that represents your chat as animated sprites.

# 🎥 Using the overlay

Visit https://haliphax.github.io/hxavatars to either build an overlay URL for
yourself or to view a demonstration (with no chat integration and a fixed
background color).

_Note: The overlay is currently hard-coded to 1920x1080, and expects to be
viewed in full-screen._

# 🎲 Commands

The following commands are available from the overlay's chat integration, with
more to come:

| Command | Description |
|---|---|
| `!avatar <value>` | Sets the user's avatar (if the value exists) |

# 🏠 Running it yourself

If you have a web server of your own, you will need to serve the contents of
the `html` folder. That's it!

You can also host it yourself by using `docker-compose`. It will spin up an
instance of the [Traefik] load balancer (for managing hostname association
and HTTPS certificates) and the [nginx] web server (for serving the files).
By default, it will be available at https://localhost.

```shell
docker-compose up
```

## 🐧 WSL (Windows)

If you are running the system with docker on WSL, it is likely that you will
not be able to use `localhost` as the hostname for the web application. In this
case, add a [hosts file] mapping for `avatars.localdomain` to the WSL system's
address. (Use `ip addr` and check the output for `eth0` in most cases.) When
invoking docker-compose, include the `wsl.yml` additional configuration to
override the hostname Traefik will use for the nginx service:

```shell
docker-compose -f docker-compose.yml -f wsl.yml up
```

You may craft a similar file with a different hostname if you just want to use
something other than `localhost`, of course; you don't have to be using WSL to
take advantage of this.


[hosts file]: https://www.freecodecamp.org/news/how-to-find-and-edit-a-windows-hosts-file/
[nginx]: https://nginx.org
[Traefik]: https://traefik.io