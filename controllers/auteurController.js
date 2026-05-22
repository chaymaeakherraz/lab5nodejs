import { AuteurModel } from '../models/auteurModel.js';

export const auteurController = {
  liste: async (req, res) => {
    try {
      const { rows } = await AuteurModel.getAll();

      res.render('pages/auteurs/liste', {
        title: 'Liste des auteurs',
        auteurs: rows
      });
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  },

  ajouterForm: (req, res) => {
    res.render('pages/auteurs/ajouter', {
      title: 'Ajouter un auteur'
    });
  },

  ajouter: async (req, res) => {
    try {
      await AuteurModel.create(req.body);
      res.redirect('/auteurs');
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  },

  details: async (req, res) => {
    try {
      const { rows } = await AuteurModel.getById(req.params.id);

      if (!rows[0]) {
        return res.status(404).render('pages/404', {
          title: 'Auteur introuvable'
        });
      }

      const { rows: livres } = await AuteurModel.getLivres(req.params.id);

      res.render('pages/auteurs/details', {
        title: `${rows[0].prenom} ${rows[0].nom}`,
        auteur: rows[0],
        livres
      });
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  },

  modifierForm: async (req, res) => {
    try {
      const { rows } = await AuteurModel.getById(req.params.id);

      if (!rows[0]) {
        return res.status(404).render('pages/404', {
          title: 'Auteur introuvable'
        });
      }

      res.render('pages/auteurs/modifier', {
        title: 'Modifier un auteur',
        auteur: rows[0]
      });
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  },

  modifier: async (req, res) => {
    try {
      await AuteurModel.update(req.params.id, req.body);
      res.redirect(`/auteurs/${req.params.id}`);
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  },

  supprimer: async (req, res) => {
    try {
      await AuteurModel.delete(req.params.id);
      res.redirect('/auteurs');
    } catch (err) {
      res.status(500).render('pages/error', {
        title: 'Erreur',
        message: err.message
      });
    }
  }
};