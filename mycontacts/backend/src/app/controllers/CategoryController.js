const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryById = await CategoriesRepository.findById(id);

    if (!categoryById) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryById = await CategoriesRepository.findById(id);

    if (!categoryById) {
      response.status(404).json({ error: 'Category not found' });
    }

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
