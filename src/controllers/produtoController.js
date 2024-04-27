import Produtos from '../models/Produtos';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Produtos.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados encontrados!',
        response,
      });
    }

    const response = await Produtos.findOne({
      where: { 
        id,
      },
    });

    return res.status(200).send({
      message: 'Dados encontrados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const { codBarra, valorUnitario, descricaoProduto } = req.body;

    const response = await Produtos.create(
      {
        codBarra,
        valorUnitario,
        descricaoProduto,
      }
    );
    return res.status(201).send({
      message: 'Dados criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400)({
        message: 'Id não informado!',
        response: [],
      });
    }

    const response = await Produtos.findOne({
      Where: {
        id,
      },
    });

    if (!response) {
      return res.status(404)({
        message: 'Id não encontrado na base',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400)({
        message: 'Id não informado!',
        response: [],
      });
    }
    console.log(id);
    const response = await Produtos.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado na base',
        response: [],
      });
    }

    await response.destroy();

    return res.status(200).send({
      message: 'Dados Destruidos!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
