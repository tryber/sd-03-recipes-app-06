/// <reference types="cypress" />

describe.skip('Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de login', () => {
  it('Tem os data-testids email-input, password-input e login-submit-btn', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="email-input"]');
    cy.get('[data-testid="password-input"]');
    cy.get('[data-testid="login-submit-btn"]');
  });
});

describe.skip('A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possível escrever o email', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="email-input"]').should('have.value', 'email@mail.com');
  });
});

describe.skip('A pessoa deve conseguir escrever sua senha no input de senha', () => {
  it('É possível escrever a senha', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="password-input"]').should('have.value', '1234567');
  });
});

describe.skip('O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
  it('O botão deve estar desativado se o email for inválido', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');

    cy.get('[data-testid="email-input"]').type('email@mail');
    cy.get('[data-testid="password-input"]').type('1234567');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');

    cy.get('[data-testid="email-input"]').clear().type('email.com');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
  });

  it('O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');

    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="password-input"]').type('123456');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
  });

  it('O botão deve estar ativado se o email e a senha forem válidos', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');

    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');

    cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled');
  });
});

describe.skip('Após a submissão, 2 tokens devem ser salvos em localStorage identificados pelas chaves mealsToken e cocktailsToken', () => {
  it('Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('mealsToken')).to.be.null;
      expect(win.localStorage.getItem('cocktailsToken')).to.be.null;
    });


    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="login-submit-btn"]').click();

    cy.window().then((win) => {
      expect(win.localStorage.getItem('mealsToken')).to.eq('1');
      expect(win.localStorage.getItem('cocktailsToken')).to.eq('1');
      win.localStorage.clear();
    });
  });
});

describe.skip('Após a submissão, o e-mail de pessoa usuária deve ser salvo em localStorage na chave user', () => {
  it('Após a submissão a chave user deve estar salva em localStorage', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('user')).to.be.null;
    });


    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="login-submit-btn"]').click();

    cy.window().then((win) => {
      expect(JSON.parse(win.localStorage.getItem('user'))).to.deep.eq({ email: 'email@mail.com' });
      win.localStorage.clear();
    });
  });
});

describe.skip('Após a submissão e validação com sucesso do login, o usuário deve ser redirecionado para a tela principal de receitas de comidas', () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });

    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('user')).to.be.null;
    });


    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="login-submit-btn"]').click();

    cy.location().should((loc) => expect(loc.pathname).to.eq('/comidas'));

    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });
});
