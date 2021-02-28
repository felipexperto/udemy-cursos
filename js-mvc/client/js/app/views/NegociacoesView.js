class NegociacoesView extends View {

  constructor(elemento) {
    super(elemento);
  }

  _template(model) {

    return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>
          
          <tbody>
            ${model.negociacoes.map((item) => `
              <tr>
                <td>${DateHelper.formatDateUTCtoStringPtBr(item.data)}</td>
                <td>${item.quantidade}</td>
                <td>${item.valor}</td>
                <td>${item.volume}</td>
              </tr>
            `).join("")}
          </tbody>
          
          <tfoot>
            <td colspan="3"></td>
            <td>${model.negociacoes.reduce((acc, item) => acc += item.volume, 0.0)}</td>
          </tfoot>
      </table>
    `;
  }

}