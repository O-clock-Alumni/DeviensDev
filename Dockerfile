FROM oclock/static-nginx-nodejs

# Workaround node-gyp requiring make, gcc, g++ & python:
RUN apk update && \
    apk add --no-cache --update alpine-sdk python yarn

# Workaround for error: "ERR! sharp Use with musl libc requires manual installation of libvips >= 8.6.1"
# => http://sharp.pixelplumbing.com/en/stable/install/#alpine-linux
# RUN apk add vips-dev fftw-dev build-base --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted
# https://bugs.alpinelinux.org/issues/9561 => add edge/main for some of the sub-dependencies
# https://bugs.alpinelinux.org/issues/8087 => don't use https:// for --repository URLs
RUN apk add vips-dev fftw-dev build-base \
    --update-cache \
    --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main \
    --allow-untrusted

COPY . /src
WORKDIR /src
ARG NODE_ENV=production
ARG DEVIENSDEV_GITHUB_TOKEN

# COPY bin/production-build.sh /bin/production-build.sh
# RUN /bin/production-build.sh

    # node-gyp is required by gatsby but not in the project's package.json (add it?)
RUN yarn global add node-gyp && \
    yarn --pure-lockfile --non-interactive

    # Building the static website :)
RUN rm -rf public .cache && \
    ./node_modules/.bin/gatsby build && \
    mkdir -p /var/www && \
    # Working around the * expansion limitation inside running containers not running commands through a shell.
    # @see https://stackoverflow.com/questions/44390360/mv-command-throwing-error-but-executing-fine-in-docker
    sh -c "mv /src/public/* /var/www/"

CMD while sleep 3600; do :; done
