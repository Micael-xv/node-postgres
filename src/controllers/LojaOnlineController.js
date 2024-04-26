import LojaOnline from '../models/LojaOnline';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await LojaOnline.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados encontrados!',
        response,
      });
    }

    const response = await LojaOnline.findOne({
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
    const { cnpj, nome } = req.body;

    const response = await LojaOnline.create(
      {
        nome,
        cnpj,
      },
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

    const response = await LojaOnline.findOne({
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
    const response = await LojaOnline.findOne({
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
