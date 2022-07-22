
const mysqlConnection  = require('../db/conection');

const express = require('express');
const app = express();

    app.get('/content', (req, res) => {  

        mysqlConnection.query(`SELECT
                        submit_text_html,
                        display_name,
                        header_img,
                        title,
                        primary_color,
                        icon_img,
                        name,
                        public_description,
                        community_icon,
                        banner_background_image,
                        submit_text,
                        description_html,
                        key_color,
                        subscribers,
                        public_description_html,
                        submit_text_label,
                        banner_img,
                        banner_background_color,
                        id,
                        header_title,
                        description,
                        submit_link_label,
                        url,
                        id_content,
                        width_banner,
                        high_banner,
                        width_icon,
                        high_icon,
                        width_header,
                        high_header
                        
                    FROM
                        content
                        INNER JOIN header_size ON  id_content_h= id_content
                    JOIN banner_size ON  id_content_b= id_content
                    JOIN icon_size  ON  id_content_i= id_content`, (err, rows, fields) => {
        
            if (err)
                res.json({statu:err})
            
            res.json(rows);  

        });
        
    });

  module.exports = app; 