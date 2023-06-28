/// <reference types="cypress" />

import * as TodoPage from "../../page-objects/todo-page"

describe('visual validation', () => {
    before(() => todoPage.navigate())

    it('should look good', () => {
        todoPage.addTodo('Clean room');
        todoPage.addTodo('Lear Javascript');

        todoPage.toggleTodo(0);
    })
})