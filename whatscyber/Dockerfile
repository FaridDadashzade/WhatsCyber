FROM cyberuserbot/whatscyber:latest

RUN git clone https://github.com/FaridDadashzade/WhatsCyber /root/WhatsCyber
WORKDIR /root/WhatsCyber/
ENV TZ=Asia/Baku
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
