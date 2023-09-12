# Cypress
###  1. Cài đặt môi trường
- Cài đặt Nodejs (là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng) link download https://nodejs.org
- Cài đặt cypress bằng NPM https://www.npmjs.com/package/cypress (NPM là chương trình quản lý thư viện ngầm định trong môi trường Node.js) ``` npm install --save-dev cypress```

### 2. Làm thế nào để mở Cypress?
- Chạy lệnh ```npx cypress open```
- Hoặc thêm script package.json 
    ```
    {
      "scripts": {
        "cypress:open": "cypress open"
      }
    }
    ```
    Sau đó chạy lệnh ```npm run cypress:open``` 