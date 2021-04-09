'use strict';
const todo = require('todo');

function isEmpty(array){
    if(array.length == 0){
        return true;
    }else{
        return false;
    }
}

module.exports = robot => {
    robot.respond(/add (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.add(task);
        msg.send('追加しました: ' + task);
    });
    robot.respond(/done (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send('完了にしました: ' + task);
    });
    robot.respond(/del (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send('削除しました: ' + task);
    });
    robot.respond(/list/i, msg => {
        const taskList = todo.list().join('\n+・');
        if(isEmpty(taskList)){
            msg.send('タスクが存在しません');
        }else{
            msg.send(taskList);
        }
    });
    robot.respond(/donelist/i, msg => {
        const taskList = todo.donelist().join('\n');
        if(isEmpty(taskList)){
            msg.send('タスクが存在しません');
        }else{
            msg.send(taskList);
        }
    });
};