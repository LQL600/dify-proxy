# 使用官方 node 运行时
FROM node:20-alpine

# 创建目录
WORKDIR /usr/src/app

# 拷贝 package.json 与 package-lock（如果有）
COPY package.json ./

# 安装依赖
RUN npm install --production

# 拷贝代码
COPY . .

# 暴露端口（可被云平台覆盖）
EXPOSE 80

# 运行
CMD ["npm", "start"]
