import fs from 'fs'
import path from 'path'

export async function getStatus() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    // let { data: Notes, error } = await supabase.from('Notes').select('*');
    // return Notes;
    const result = await (await fetch('https://status.afrihost.com/api/public/v1/notices')).json();
    
    const open: Data[] = [];
    const closed: Data[] = [];
    // @ts-ignore
    result[1].notices.open.forEach(item => {
         if(item.title.toLowerCase().includes("frogfoot")){
            open.push(item);
         }
     });

    // @ts-ignore
     result[1].notices.closed.forEach(item => {
        if(item.title.toLowerCase().includes("frogfoot")){
           closed.push(item);
        }
    });

    const data: any = {
        open: open,
        closed: closed
    }


    return data;
  }

  export interface Data {
    id:            number;
    title:         string;
    description:   string;
    resolution:    null;
    product_id:    number;
    impact_id:     number;
    expires_at:    null;
    resolved_at:   null;
    should_notify: number;
    created_at:    string;
    product:       Impact;
    impact:        Impact;
    categories:    Category[];
    updates:       any[];
    provinces:     Province[];
    cities:        City[];
    suburbs:       any[];
  }
  
  export interface Category {
    id:         number;
    name:       string;
    slug:       string;
    product_id: number;
    pivot:      CategoryPivot;
  }
  
  export interface CategoryPivot {
    notice_id:   number;
    category_id: number;
  }
  
  export interface City {
    id:          number;
    name:        string;
    slug:        string;
    province_id: number;
    pivot:       CityPivot;
  }
  
  export interface CityPivot {
    notice_id: number;
    city_id:   number;
  }
  
  export interface Impact {
    id:            number;
    name:          string;
    slug:          string;
    description:   null | string;
    order?:        number;
    has_location?: number;
  }
  
  export interface Province {
    id:    number;
    name:  string;
    slug:  string;
    pivot: ProvincePivot;
  }
  
  export interface ProvincePivot {
    notice_id:   number;
    province_id: number;
  }
  