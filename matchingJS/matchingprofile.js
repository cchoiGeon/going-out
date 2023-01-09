var a = function(userpage,userpcampus,userpideal,usermbti){
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 100%;
            border-top: 1px solid #444444;
            border-collapse: collapse;
        }
        th, td {
            border-bottom: 1px solid #444444;
            border-left: 1px solid #444444;
            padding: 10px;
        }
        th:first-child, td:first-child {
            border-left: none;
        }
    </style>
</head>
<body>
    <body>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">사용자</th>
                    <th scope="col">상대방</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">선호하는 나이</th>
                    <td>${userpage}</td>
                    <td>연상</td>
                </tr>
                <tr>
                    <th scope="row">선호하는 캠퍼스</th>
                    <td>${userpcampus}</td>
                    <td>서울캠퍼스</td>
                </tr>
                <tr>
                    <th scope="row">나의 이상형</th>
                    <td>${userpideal}</td>
                    <td>착함</td>
                </tr>
                <tr>
                    <th scope="row">나의 mbti</th>
                    <td>${usermbti}</td>
                    <td>ENFJ</td>
                </tr>
            </tbody>
        </table>
    </body>    
</body>
</html>
`
}
module.exports = a;