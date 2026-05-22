import { query } from '../config/db.js';

export const AuteurModel = {
  getAll: () => {
    return query('SELECT * FROM auteurs ORDER BY nom, prenom');
  },

  getById: (id) => {
    return query('SELECT * FROM auteurs WHERE id = $1', [id]);
  },

  create: (data) => {
    return query(
      `INSERT INTO auteurs (nom, prenom, date_naissance, nationalite, biographie)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        data.nom,
        data.prenom,
        data.date_naissance || null,
        data.nationalite,
        data.biographie
      ]
    );
  },

  update: (id, data) => {
    return query(
      `UPDATE auteurs
       SET nom = $1, prenom = $2, date_naissance = $3, nationalite = $4, biographie = $5
       WHERE id = $6 RETURNING *`,
      [
        data.nom,
        data.prenom,
        data.date_naissance || null,
        data.nationalite,
        data.biographie,
        id
      ]
    );
  },

  delete: (id) => {
    return query('DELETE FROM auteurs WHERE id = $1 RETURNING *', [id]);
  },

  getLivres: (id) => {
    return query('SELECT * FROM livres WHERE auteur_id = $1 ORDER BY titre', [id]);
  }
};