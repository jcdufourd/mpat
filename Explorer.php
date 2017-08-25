<?php
/*
 * Plugin Name: MPAT Explorer
 * Plugin URI: https://github.com/jcdufourd/mpat/explorer/
 * Description: Explorer MPAT sites
 * Version: 1.0.beta
 * Author: Jean-Claude Dufourd
 * Author URI: https://github.com/jcdufourd/
 * License: GPL2
 */

namespace MPAT\Explorer;

class Explorer {

    function general_init() {
        add_menu_page('MPAT_Explorer', 'Explorer', 'manage_mpat_options', 'MPAT_explorer', array(&$this, 'load'), 'dashicons-visibility');
    }

    function load() {
        /* activate WP REST API v2 http://v2.wp-api.org/extending/javascript-client/ */
        wp_enqueue_script('wp-api');
        wp_enqueue_script('mpat-general', plugin_dir_url(__FILE__) . 'build/main.bundle.js', array(), 1.0, true);
        wp_localize_script('mpat-general', 'MPATExplorer', $this->get());
        wp_enqueue_style('mpat-general', plugin_dir_url(__FILE__) . 'explorer.css');
?>
        <div id="insertionPoint">
            <script src="https://d3js.org/d3.v3.js"></script>
            <h2>MPAT Explorer for <?php echo bloginfo('name'); ?></h2>
            <h4 id="navmodel">Navigation model: </h4>
            <h4 id="pages">Pages: </h4>
            <h4 id="layouts">Layouts: </h4>
            <details>
                <summary>Page Text Editor</summary>
                <br/>
                <textarea
                        id="mpat-text-editing"
                        title="mpat text editing"
                        class="mpat-text-editing">
                </textarea>
                <br/>
                Get page: &nbsp;
                <select id="page-id-field" title="page id selector">
                    <option value="0">CHOOSE PAGE</option>
                </select>
                &nbsp;
                <button
                        type="button"
                        id="explorerPutPage"
                        class="mpat-explorer-put-page-button">
                    Put Page
                </button>
                <br/>
                Get page model: &nbsp;
                <select id="model-id-field" title="model id selector">
                    <option value="0">CHOOSE MODEL</option>
                </select>
                &nbsp;
                <button
                        type="button"
                        id="explorerPutModel"
                        class="mpat-explorer-put-page-button">
                    Put Model
                </button>
                <br/>
                Get option: &nbsp;
                <select id="option-id-field" title="option selector">
                    <option value="0">CHOOSE OPTION</option>
                    <option value="mpat_application_manager">mpat_application_manager</option>
                    <option value="timeline_scenario">timeline_scenario</option>
                    <option value="dsmcc">dsmcc</option>
                    <option value="theme_mods_mpat%2Dtheme">theme_mods_mpat-theme</option>
                </select>
                &nbsp;
                <button
                        type="button"
                        id="explorerPutOption"
                        class="mpat-explorer-put-page-button">
                    Put Option
                </button>
            </details>
            <br/>
            <details>
                <summary>Page info with components, links and media</summary>
                <table class="general-table">
                    <thead>
                    <tr>
                        <td>Page title (ID)</td>
                        <td>Content</td>
                    </tr>
                    </thead>
                    <tbody  id="infoTable"></tbody>
                </table>
            </details>
            <br/>
            <details>
                <summary>Layout info with zones</summary>
                <table class="general-table">
                    <thead>
                    <tr>
                        <td>Layout name (ID)</td>
                        <td>Used by</td>
                        <td>Zones</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody id="layoutTable"></tbody>
                </table>
            </details>
            <br/>
        </div>
<?php
    }

    /*
     * This function gathers all the MPAT specific information into one object and returns it
     */
  static function get() {
    $main = array();
    $opt = get_option('mpat_application_manager');
    if ($opt) {
      array_push($main, ['mpat_application_manager' => $opt]);
    }
    $opt = get_option('timeline_scenario');
    if ($opt) {
      array_push($main, ['timeline_scenario' => $opt]);
    }
    $opt = get_option('dsmcc');
    if ($opt) {
      array_push($main, ['dsmcc' => $opt]);
    }
    $opt = get_option('theme_mods_mpat-theme');
    if ($opt) {
      array_push($main, ['theme_mods_mpat-theme' => $opt]);
    }
    $pages = get_pages();
    foreach ($pages as $page) {
      $page = $page->to_array();
      $meta = get_post_meta($page['ID'], 'mpat_content', true);
      if (isset($meta["layoutId"]))
      {
        $layout = get_post( $meta["layoutId"] );
        if ($layout && $layout->post_type == "page_layout") {
          $meta["layout_name"] = $layout->post_title;
        }
      }
      $page['meta'] = array('mpat_content' => $meta);
      array_push($main, array(
        "page" => $page,
      ));
    }
    $pages = get_posts(array('post_type' => 'page_model'));
    foreach ($pages as $page) {
      $page = $page->to_array();
      $meta = get_post_meta($page['ID'], 'mpat_content', true);
      if (isset($meta["layoutId"]))
      {
        $layout = get_post( $meta["layoutId"] );
        if ($layout && $layout->post_type == "page_layout") {
          $meta["layout_name"] = $layout->post_title;
        }
      }
      $page['meta'] = array('mpat_content' => $meta);
      array_push($main, array(
        "page_model" => $page,
      ));
    }
    $layouts = get_posts( array( 'post_type' => 'page_layout', 'posts_per_page' => '100' ) );
    foreach ($layouts as $layout) {
      $layout = $layout->to_array();
      if ($layout['post_status'] == 'publish') {
        $meta = get_post_meta($layout['ID'], 'mpat_content', true);
        $layout['meta'] = array('mpat_content' => $meta);
        array_push($main, array(
          "page_layout" => $layout,
        ));
      }
    }
    $customcss = get_posts( array( 'post_type' => 'custom_css', 'posts_per_page' => '100' ) );
    foreach ($customcss as $cc) {
      $cc = $cc->to_array();
      array_push($main, array(
          "custom_css" => $cc,
      ));
    }
    return $main;
  }

}

$ge = new Explorer();
add_action("admin_menu", array(&$ge, "general_init"));
