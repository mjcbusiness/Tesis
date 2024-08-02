import { Component,ViewChild  } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tesis';
  @ViewChild(SidebarComponent)
  sidebar: SidebarComponent = new SidebarComponent;

  handleSidebarToggle() {
    this.sidebar.toggleSidebar();
  }
}
