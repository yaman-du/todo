"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = require("express");

var TodoModel = require("../model/todoModel");

var todoRouter = express.Router();

//render sidan kommer länkas till namnet som är sammanlkopplad med ejs filen.
// res.render("commentsView, {object}

todoRouter.post("/todo", function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var addTodo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        addTodo = new TodoModel({
                            todo: req.body.todo,
                            todo_day: req.body.todo_day,
                            whose_list: req.body.whose_list
                        });
                        _context.next = 3;
                        return addTodo.save(function (error, success) {
                            if (error) {
                                console.log(error);
                                res.send(error.message);
                            } else res.redirect("/todo");
                        });

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

todoRouter.get("/todo", function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var todoAnswer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return TodoModel.find();

                    case 2:
                        todoAnswer = _context2.sent;

                        res.render("todoView", { todoAnswer: todoAnswer, title: "yamandus sida " });

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

todoRouter.get("/delete/:id", function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        console.log("deleted id: " + req.params.id);
                        _context3.next = 3;
                        return TodoModel.deleteOne({ _id: req.params.id });

                    case 3:
                        //res.send("It works");
                        res.redirect("/todo");

                    case 4:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

todoRouter.get("/edit/:id", function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return TodoModel.findById({ _id: req.params.id });

                    case 2:
                        response = _context4.sent;

                        console.log(response);
                        res.render("edit", { response: response });

                    case 5:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}());

todoRouter.post("/edit/:id", function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return TodoModel.updateOne({ _id: req.body._id }, { $set: { todo: req.body.todo, todo_day: req.body.todo_day, whose_list: req.body.whose_list } }, { runValidators: true });

                    case 2:
                        res.redirect("/todo");

                    case 3:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}());

module.exports = todoRouter;