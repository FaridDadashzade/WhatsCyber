FROM cyberuserbot/whatscyber:latest

RUN git clone https://github.com/FaridDadashzade/WhatsCyber /root/WhatsCyber
WORKDIR /root/WhatsCyber/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
