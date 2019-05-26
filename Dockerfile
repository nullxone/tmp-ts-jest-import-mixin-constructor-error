FROM node:12.2-stretch
LABEL maintainer="nullxone"

ENV PATH "/js/node_modules/.bin:$PATH"

WORKDIR /js

ENTRYPOINT ["/usr/bin/env"]
CMD ["true"]

COPY . ./

RUN yarn
RUN tsc -b .
RUN jest